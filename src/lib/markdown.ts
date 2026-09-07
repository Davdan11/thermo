import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content/guides');

export interface GuideMetadata {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  readTime: string;
  category: "choisir" | "comparer" | "prix" | "subventions" | "installation" | "entretien";
}

export interface Guide extends GuideMetadata {
  contentHtml: string;
}

export function getAllGuides(): GuideMetadata[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(contentDirectory);
  const allGuidesData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);
      
      return {
        slug,
        ...(matterResult.data as Omit<GuideMetadata, 'slug'>),
      };
    });

  return allGuidesData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    
    const contentHtml = processedContent.toString();

    return {
      slug,
      contentHtml,
      ...(matterResult.data as Omit<GuideMetadata, 'slug'>),
    };
  } catch (error) {
    console.error(`Error loading guide ${slug}:`, error);
    return null;
  }
}

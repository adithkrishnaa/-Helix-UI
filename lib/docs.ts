import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'content/docs');

export interface DocMetadata {
    title: string;
    description: string;
    slug: string;
}

export function getAllDocSlugs() {
    const files = fs.readdirSync(CONTENT_PATH);
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''));
}

export async function getDocData(slug: string) {
    const fullPath = path.join(CONTENT_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // For a production app with more features, we might use gray-matter here.
    // For now, we'll keep it simple and just return the content.
    return {
        slug,
        content: fileContents,
    };
}

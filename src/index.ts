import { silverHtml } from "@sika7/silver-html";
import {
  silverHtmlSanitize,
  allowTag,
} from "@sika7/silver-html-plugin-sanitize";

export { allowTag } from "@sika7/silver-html-plugin-sanitize";

export function sanitizeHtml(html: string, allowTags: allowTag[]) {
  return silverHtml(html, {}, [
    silverHtmlSanitize({
      allowTags: allowTags,
    }),
  ]);
}

const defaultImage = "https://dariushay.github.io/fresh-favored/images/hero.jpg";
const defaultImageAlt = "Fresh & Favored food and sweets presentation";

function setMeta(selector, attributes, content) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      tag.setAttribute(key, value);
    });
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function SEO({ title, description, image = defaultImage, imageAlt = defaultImageAlt }) {
  if (title) document.title = title;
  if (description) {
    setMeta('meta[name="description"]', { name: "description" }, description);
    setMeta('meta[property="og:description"]', { property: "og:description" }, description);
    setMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
  }
  if (title) {
    setMeta('meta[property="og:title"]', { property: "og:title" }, title);
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  }
  if (image) {
    setMeta('meta[property="og:image"]', { property: "og:image" }, image);
    setMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);
  }
  if (imageAlt) {
    setMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }, imageAlt);
  }
  return null;
}

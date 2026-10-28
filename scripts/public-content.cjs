const { parseHTML } = require('linkedom');

// Keep these pages in the local archive, but exclude them from publication.
const unpublished = ['maria-iliana-simion', 'corina-gheorghe', 'andreea-geampalia', 'cariere'];
const isUnpublished = value => unpublished.some(slug => value.split('/').includes(slug));

function publicPages(pages) {
  return pages.filter(page => !isUnpublished(page.path)).map(page => {
    if (!unpublished.some(slug => page.html.includes(slug))) return page;
    const { document } = parseHTML(`<html><body>${page.html}</body></html>`);
    document.querySelectorAll('h4 > a[href]').forEach(link => {
      if (!isUnpublished(new URL(link.getAttribute('href'), 'https://www.proerudio.ro').pathname)) return;
      let card = link.parentElement.parentElement;
      while (card && !card.querySelector('img')) card = card.parentElement;
      if (!card || card.querySelectorAll('h4').length !== 1) throw new Error(`Cannot safely remove team card in ${page.path}`);
      card.remove();
    });
    document.querySelectorAll('a[href]').forEach(link => {
      if (isUnpublished(new URL(link.getAttribute('href'), 'https://www.proerudio.ro').pathname)) link.remove();
    });
    return { ...page, html: document.body.innerHTML };
  });
}

module.exports = { publicPages };

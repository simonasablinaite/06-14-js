console.clear();

class Page404 {
  render() {
    return '404 content';
  }
}

class PageHome {
  render() {
    return 'Home content';
  }
}

const router = {
  '': PageHome,
  '404': Page404,
}

const trimmedPath = 'as'

let pageClass = router['404'];
if (trimmedPath in router) {
  pageClass = router[trimmedPath];
}

const pageObj = new pageClass();
const HTML = pageObj.render();

console.log(pageClass);
console.log(pageObj);
console.log(HTML);


let previousLink  = document.location.href,
    nextLink      = document.location.href;

let linkRefresher = () => {
  let previousArr = document.getElementsByClassName('pagination-item pagination-item--previous'),
      nextArr     = document.getElementsByClassName('pagination-item pagination-item--next');

  previousLink    = previousArr[0] ?
                    previousArr[0].getElementsByTagName('a')[0]?.href :
                    document.location.href;

  nextLink        = nextArr[0] ?
                    nextArr[0].getElementsByTagName('a')[0]?.href :
                    document.location.href;
};

document.onkeydown = (e) => {
  e = e || window.event;

  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  switch (e.key) {
    case 'ArrowRight':  document.location.href = nextLink;      break;
    case 'ArrowLeft':   document.location.href = previousLink;  break;
    // case 'j':           document.location.href = nextLink;      break;
    // case 'k':           document.location.href = previousLink;  break;
    // case 'l':           document.location.href = nextLink;      break;
    // case 'h':           document.location.href = previousLink;  break;
  }
};window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat([
  (hook, vm) => hook.doneEach(linkRefresher)
]);
// Component heading
// import Errors from './Errors';

import linkComponent from './link';
import stringifyAttributes from 'stringify-attributes';

// TODO replace with a link component
const headingMainBlock = (hrefTitle, idTitle, textTitle) => {
  return `<a href="${hrefTitle}" 
  data-link-id="${idTitle}" 
  style="text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;" 
  target="_self">${textTitle}</a>`;
};


const heading = (params) => {
   const attributes = {
    target: `_self`,
    href: params.href,
    'data-link-id': params.id,
    style: `text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;`,
  };

  const attributesStr = stringifyAttributes(attributes);

  // console.log(attributesStr);

  return linkComponent({ content: params.text, attributesStr });

}

export default heading;

// export default function (params) {
//   const { hrefTitle, idTitle, textTitle } = params;
//   const error = new Errors('contentTitleText');

//   if (hrefTitle == '') {
//     error.add('No hrefTitle');
//   }
//   if (idTitle == '') {
//     error.add('No idTitle');
//   }
//   if (textTitle == '') {
//     error.add('No textTitle');
//   }

//   return headingMainBlock(hrefTitle, idTitle, textTitle);
// }

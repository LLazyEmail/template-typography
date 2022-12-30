// Component heading
// import Errors from './Errors';

import stringifyAttributes from 'stringify-attributes';
import linkComponent from './link';
import headingOneComponent from './headingOne';


// TODO replace with a link component
// const headingMainBlock = (hrefTitle, idTitle, textTitle) => {
//   return `<a href="${hrefTitle}" 
//   data-link-id="${idTitle}" 
//   style="text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;" 
//   target="_self">${textTitle}</a>`;
// };

function headingNMTG (params: any) {

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

export default headingNMTG;

function html (children: string, attrOne: string, attrTwo: string) {

  `<span ${attrOne}>
      <span ${attrTwo}>
        ${children}
      </span>
    </span>`;
  }
function headingHN (params: any) {

  const { attributes, children } = params;
  const attributesStr = stringifyAttributes(attributes);

  const spanOne = {
    style: styles.spanFont
  };
  const attrOne = stringifyAttributes(spanOne);
  //-------
  const spanTwo = {
    style: styles.spanSize,
    "data-testid": "mainTitleChildrenTest"
  };
  const attrTwo = stringifyAttributes(spanTwo);
  //-------
  

  return headingOneComponent({ 
    content: html(children, attrOne, attrTwo), 
    attributesStr 
  });

}
//-----------------------------
//   if (hrefTitle == '') {
//     error.add('No hrefTitle');
//   }
//   if (idTitle == '') {
//     error.add('No idTitle');
//   }
//   if (textTitle == '') {
//     error.add('No textTitle');
//   }


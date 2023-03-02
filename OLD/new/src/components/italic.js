// import stringifyAttributes from 'stringify-attributes';

// TODO think about renaming content into children
const italicComponent = (params) => {
    // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }
  
    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }
  
    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }
  
    const { attributes, content } = params;

    // const attributesStr = stringifyAttributes(attributes);
 

    return `<i>${content}</i>`;
  };
  
  export default italicComponent;


//   const italicComponent = ({content}) => {
//     return `<i>${content}</i>`;
// }

// export default italicComponent;

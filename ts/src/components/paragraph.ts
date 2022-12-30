import stringifyAttributes from 'stringify-attributes';
// params: { src: string, width: string }
function paragraphComponent (params: any) {

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

    const attributesStr = stringifyAttributes(attributes);
 

    return `<p ${attributesStr}>${content}</p>`;
  };
  
  export default paragraphComponent;

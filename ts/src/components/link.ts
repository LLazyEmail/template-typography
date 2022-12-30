import stringifyAttributes from 'stringify-attributes';
// import customErrors from './Errors';
// const customError = new customErrors('link');

// import ow from 'ow';

function linkComponent (params: any) {

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

  return `<a ${attributesStr}>${content}</a>`;
};

export default linkComponent;

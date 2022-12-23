// import customErrors from './Errors';
// const customError = new customErrors('link');

// import ow from 'ow';

const linkComponent = (params) => {
  // if (typeof params != 'object') {
  //   customError.add('"params" is not "object"');
  // }

  // if (typeof params.attributes == '') {
  //   customError.add('empty attributes');
  // }

  // if (typeof params.content == '') {
  //   customError.add('empty content');
  // }


  const attributesStr = stringifyAttributes(attributes);

  const { attributes, content } = params;

  return `<a ${attributesStr}>${content}</a>`;
};

export default linkComponent;
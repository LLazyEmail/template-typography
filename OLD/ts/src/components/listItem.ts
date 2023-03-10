import stringifyAttributes from 'stringify-attributes';
// params: { src: string, width: string }
function listItemComponent (params: any) {


    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<li ${attributesStr}>${children}</li>`;;
}

export default listItemComponent;

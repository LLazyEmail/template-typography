import { linkComponent, imgWrapper } from '../src/components/image';

import buttonComponent2 from '../src/components/button2';

const config = {id: '12', href: 'google.com'};

const data = {
  id: 'imageBlock-26',
  href: 'https://www.nomoretogo.com/weekly-menu/',
  src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg',
  //------
  title: 'Chipotle Cream Skillet Chicken',
  text: 'over Rice and Snap Peas',
};


describe('testing image with a link', () => {
  test('rendering imgWrapper component', () => {


    const imageLink = imgWrapper(data);

    console.log(imageLink);

  });
});




describe('testing complex links', () => {
  test('rendering Button2 component', () => {
    // console.log(buttonComponent2);
    console.log(buttonComponent2(config))
    //buttonComponent2({id: '12', href: 'google.com'});
    //         const string1 = printHead();
    //   //       // console.log(string);
    //         expect(printHead()).toBeDefined();
    //         writingFile(string1);
  });
});

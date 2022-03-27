import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { config } from 'dotenv';

config();

configure({ adapter: new Adapter() });
document.body.innerHTML = '<div id="root"></div>';
Object.defineProperty(window, 'location', { value: { assign: () => { }, reload: () => { } }, writable: true });
window.location = {
  ...window.location,
  href: 'https://google.com',
  reload: jest.fn(),
  assign: jest.fn(),
};
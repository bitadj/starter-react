import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/*
  Enzyme expects an adapter to be configured, but found none.
  To configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
*/
configure({ adapter: new Adapter() });

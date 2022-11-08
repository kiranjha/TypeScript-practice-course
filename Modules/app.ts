import { Substraction } from './Modules';
import { Plus as Addition } from './re-exports';

let addObject = new Addition(10,10);
let subObject = new Substraction(50,10);
addObject.Sum();
subObject.Substract();
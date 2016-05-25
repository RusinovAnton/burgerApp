import { forEach as _forEach }  from 'lodash';
import { Size, Stuff, Top } from '../../app/classes/components/Components';
import { component as validateComponent } from './utils/validate';

class Burger {
    constructor(size, stuff, top) {
        this.components = {
            size: size || null,
            stuff: stuff || [],
            top: top || []
        }
    }

    set size(size) {
        if (validateComponent(size, Size)) this.components.size = size;
    }

    get size() {
        return this.components.size;
    }
}

export default Burger;

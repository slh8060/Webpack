/**
 * Created by apple on 2017/3/21.
 */
import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Heldfglo ','webpack'],'');
    return element;
}

document.body.appendChild(component());
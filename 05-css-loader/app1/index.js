/**
 * Created by apple on 2017/3/16.
 */
import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join('The second entry file','');
    return element;
}

document.body.appendChild(component());
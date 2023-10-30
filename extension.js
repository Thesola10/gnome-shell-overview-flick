
import St from 'gi://St';
import Shell from 'gi://Shell';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as EdgeDragAction from 'resource:///org/gnome/shell/ui/edgeDragAction.js';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class OverviewFlickExtension extends Extension
{
    gesture = new EdgeDragAction.EdgeDragAction(St.Side.RIGHT, Shell.ActionMode.NORMAL);

    callback() {
        Main.overview.show();
    }

    enable() {
        this.gesture.connect('activated', this.callback.bind(this));
        global.stage.add_action(this.gesture);
    }

    disable() {
        global.stage.remove_action(this.gesture);
    }
}

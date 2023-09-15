(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208ffa"],{a6d3:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Changelog")]),t("h2",[e._v("0.7.1-fix.1")]),t("p",[e._v("Fix: Fixed the issue of dragging nodes without excluding the child nodes of the dragged nodes.")]),t("h2",[e._v("0.7.1")]),t("p",[e._v("Fix:")]),t("blockquote",[t("p",[e._v("1.Fix the issue of unsaved associated line endpoints after changes.")]),t("p",[e._v("2.Fix the issue of abnormal canvas scrolling when moving the mouse to the edge of multiple selected nodes when the distance from the top left corner of the canvas to the browser window is not 0.")]),t("p",[e._v("3.Fix the issue of importing xmind file errors for nodes with empty titles.")]),t("p",[e._v("4.Fix the issue where the exported xmind file prompts for corruption when opened on the latest version of xmind software.")]),t("p",[e._v("5.Fix the issue where stickers cannot be displayed when exporting data with stickers in xmind format.")]),t("p",[e._v("6.Fix the issue of node right-click event reporting errors when the select plugin is not registered.")]),t("p",[e._v("7.There is no issue with removing duplicates in the method of registering plugins.")])]),t("p",[e._v("New:")]),t("blockquote",[t("p",[e._v("1.Reconstruct node drag and drop logic: optimize drag and drop difficulties in some situations, adapt to various structures, and automatically move the canvas when the mouse moves to the edge of the canvas during drag and drop.")]),t("p",[e._v("2.Reconstruct the scrollbar plugin to optimize the user experience.")]),t("p",[e._v("3.Imperfect resolution of conflicts between logical structure diagrams, mind maps, directory organization diagrams, organization chart summaries, and nodes (the summaries should be rewritten or deleted later).")]),t("p",[e._v("4.Activate adjacent nodes after deleting them.")]),t("p",[e._v("5.In node data_ The starting field is considered a custom field.")])]),t("p",[e._v("Demo:")]),t("blockquote",[t("p",[e._v("1.The page will display the current core library version number.")])]),t("h2",[e._v("0.7.0")]),t("p",[e._v("Breaking change: Removed the section of node activation style in the theme file, Setting the activation style of nodes is no longer supported, and the activation effect has been changed to a unified node outer border style, while also supporting the mouse hover effect.")]),t("p",[e._v("Fix:")]),t("blockquote",[t("p",[e._v("1.Fix rendering anomalies when the node border size is relatively large.")]),t("p",[e._v("2.Fixed an issue where the node style of the associated line will not be updated when switching themes.")]),t("p",[e._v("3.Fix that selecting all did not trigger node_ The issue with active events.")])]),t("p",[e._v("新增：")]),t("blockquote",[t("p",[e._v("1.When folding nodes, displays the number of collapsed nodes.")]),t("p",[e._v("2.Support the position of the endpoint of the associated line to follow mouse drag changes.")]),t("p",[e._v("3.Add a scrollbar plugin.")]),t("p",[e._v("4.Support opening specified online files through fileURL query parameters in URLs.")]),t("p",[e._v("5.The fishbone diagram supports setting node margins.")]),t("p",[e._v("6.By default, double-click to reset the canvas.")]),t("p",[e._v("7.Modify the parameters of the export image method, and when exporting PDF, if the size of the mind map is smaller than A4 paper, do not rotate the direction.")]),t("p",[e._v("8.Improve the clarity of exported images and PDFs on high-definition screens.")]),t("p",[e._v("9.Add a pre destruction lifecycle function to the plugin to address the issue of some side effects that were not cleared during the destruction of the mind map.")]),t("p",[e._v("10.Optimize the settings of the basic style and do not trigger full rendering when modifying theme attributes that do not affect size.")]),t("p",[e._v("11.Prohibit triggering node right-click menu events when multiple node selections are completed, to avoid triggering the right-click menu display.")]),t("p",[e._v("12.Optimize the Select plugin so that if multiple selected nodes do not change, the activation event is not triggered.")]),t("p",[e._v("13.The activation node list thrown by event node_active no longer directly references the internal activation list.")]),t("p",[e._v("14.Optimize the logic of mouse button down node events, and support dragging the canvas by holding down the root node with the right mouse button in the right-click drag and drop canvas mode.")])]),t("p",[e._v("Demo：")]),t("blockquote",[t("p",[e._v("1.Do not directly reference the internal activation node list to optimize performance.")]),t("p",[e._v("2.Support configuring whether to display scrollbars.")]),t("p",[e._v("3.Delete the active node configuration in the sidebar node style configuration section.")])]),t("h2",[e._v("0.6.17")]),t("p",[e._v("Fix:")]),t("blockquote",[t("p",[e._v("1.Fix the issue of error reporting in the xmind file exported from Baidu Brain Map.")]),t("p",[e._v("2.Fix the mindMap. export method code error.")])]),t("p",[e._v("New:")]),t("blockquote",[t("p",[e._v("1.Create index.d.ts file。")]),t("p",[e._v("2.Support configuration to enable double click reset mind map.")]),t("p",[e._v("3.Intercept paste operations during rich text editing, remove formatting, and only allow pasting pure text.")])]),t("h2",[e._v("0.6.16")]),t("p",[e._v("Fix:")]),t("blockquote",[t("p",[e._v("1.Optimize the logic of rich text measurement elements, remove duplicate settings for styles, and add duplicate nodes")]),t("p",[e._v("2.Optimize the export image logic, and when traversing the node to convert the URL of the image, if it is already in the form of data: URL, do not handle it repeatedly.")])]),t("p",[e._v("New:")]),t("blockquote",[t("p",[e._v("1.Remove the second parameter of the exported SVG method and configure it through instantiation instead.")]),t("p",[e._v("2.Export images without using external libraries.")])]),t("p",[e._v("Demo:")]),t("blockquote",[t("p",[e._v("1.Fixed a bug where siblings can be added to the root node when editing the outline separately.")])]),t("h2",[e._v("0.6.15-fix.2")]),t("p",[e._v("Fix: Fixed an issue where rich text nodes cannot be displayed in Firefox browser.")]),t("h2",[e._v("0.6.15-fix.1")]),t("p",[e._v("New:")]),t("blockquote",[t("p",[e._v("1.Export PDF supports pagination export based on image size.")]),t("p",[e._v("2.Exporting PDF supports automatic direction adjustment based on aspect ratio.")]),t("p",[e._v("3.Optimize the placeholder elements of the expand and collapse buttons: 1. Nodes without child nodes do not render this element; 2. Dynamically update the element based on the existence of child nodes.")]),t("p",[e._v("4.Add a configuration that prohibits mouse wheel scaling.")]),t("p",[e._v("5.Supports passing error handling functions.")])]),t("p",[e._v("Fix:")]),t("blockquote",[t("p",[e._v("1.Fix the issue of displaying exceptions when node text is empty.")]),t("p",[e._v("2.Change the paddingX and paddingY of exported SVG graphics to single sided padding.")]),t("p",[e._v("3.Fixed an issue where the mouse is not centered when zooming when the canvas is not 0 from the top left corner of the browser window.")]),t("p",[e._v("4.Fix the issue of overlapping node borders.")])]),t("p",[e._v("Demo：")]),t("blockquote",[t("p",[e._v("1.The bottom right corner supports jumping to related links.")]),t("p",[e._v("2.Adjust the position of the mini map to solve the problem of being blocked by side buttons.")]),t("p",[e._v("3.Fix the issue where the prompt in the upper right corner of the open local file cannot be closed.")]),t("p",[e._v("4.Editing the outline separately is no longer linked to the canvas, optimizing the editing experience under large data volume.")]),t("p",[e._v("5.The sidebar involves graphical options to increase visualization effects.")])]),t("h2",[e._v("0.6.14")]),t("p",[e._v("New:")]),t("blockquote",[t("p",[e._v("1.Remove and create hidden input boxes, and copy and paste them through navigator. clipboard; Support cross browser pasting of mind map node data; Support custom processing of text data in the clipboard.")])]),t("p",[e._v("Demo:")]),t("blockquote",[t("p",[e._v("1.Fix the issue of enabling input to automatically enter text editing mode and conflicting with other input boxes.")]),t("p",[e._v("2.Fix the issue of not being able to delete node images in the node image pop-up window.")]),t("p",[e._v("3.Fixed an issue where the text decoration line style of nodes cannot be removed in the node style sidebar.")]),t("p",[e._v("4.The color selector supports selecting transparent colors.")]),t("p",[e._v("5.Fix the issue of importing mind map data without updating the sidebar data when the basic style sidebar is open.")]),t("p",[e._v("6.Fixed the issue of not focusing when modifying the text of one node in the outline and then clicking on other nodes.")]),t("p",[e._v("7.Fixed an issue where the node and word count statistics in the bottom left corner were not updated after exiting Zen mode.")]),t("p",[e._v("8.Support deleting hyperlinks and notes of nodes from the right-click menu.")]),t("p",[e._v("9.Support pasting node data of Zhixi Mind Map.")])]),t("h2",[e._v("0.6.13")]),t("p",[e._v("Fix:")]),t("blockquote",[t("p",[e._v("1.Fix the issue of the inability to drag the canvas while holding down the middle mouse button on a node in read-only mode.")]),t("p",[e._v("2.Fixed the issue of probabilistic error reporting after quickly dragging nodes several times.")]),t("p",[e._v("3.Fix the issue of pulling up the input method during operations such as activating nodes on the mobile end, expanding and collapsing.")]),t("p",[e._v("4.Fix the issue where an exception request is initiated when the background image in the theme configuration is none.")])]),t("p",[e._v("New:")]),t("blockquote",[t("p",[e._v("1.Mobile gesture scaling optimization: Scale according to a linear relationship, and adjust the canvas position with double finger displacement.")]),t("p",[e._v("2.Remove the logic of asynchronous rendering nodes and improve the speed of creating new nodes.")]),t("p",[e._v("3.The export of images has been changed from the html2canvas library to the dom to image more library to address the issue of missing text styles in exporting rich text nodes.")]),t("p",[e._v("4.When a non rich text input box enters the editing state, it is deselected by default.")]),t("p",[e._v("5.When there is an activation node, it supports automatically entering text editing mode when pressing the Chinese, numeric, or English buttons.")])]),t("p",[e._v("Demo：")]),t("blockquote",[t("p",[e._v("1.Add anti shake operations when saving view data to optimize performance.")]),t("p",[e._v("2.Some time-consuming operations add loading effects.")]),t("p",[e._v("3.Improve the dark mode of right-click menus and rich text toolbars.")])]),t("h2",[e._v("0.6.12")]),t("p",[e._v("Fix:")]),t("blockquote",[t("p",[e._v("1.Fix the issue where the indicator in the mini map will also move out of the mini map area when the mind map is completely moved out of the visible area.")]),t("p",[e._v("2.Fix the issue of overly sensitive dual finger scaling on the mobile end.")]),t("p",[e._v("3.Fix the issue of holding down nodes while dragging the canvas in read-only mode.")]),t("p",[e._v("4.Fix the issue of incorrect rendering of the mini map when the distance between the mind map and the top left corner of the browser window is not 0.")]),t("p",[e._v("5.Fix the issue of the prompt block being too large for the new location when moving nodes.")]),t("p",[e._v("6.Fix the issue where search cannot be replaced with empty characters.")]),t("p",[e._v("7.Fixed the issue of missing line breaks after searching and replacing in rich text mode.")]),t("p",[e._v("8.Fixed the issue of missing focus in the input box when clicking on text editing in the outline.")])]),t("p",[e._v("New:")]),t("blockquote",[t("p",[e._v("1.Adding a callback parameter to the node move end event (node_drag) can obtain the uid of the move to the node.")]),t("p",[e._v("2.Support specifying the location to which internal elements are added through configuration.")]),t("p",[e._v("3.Support the format brush function.")]),t("p",[e._v("4.Under the curve style, the connection line style of the root node supports consistency with other nodes.")]),t("p",[e._v("5.Search supports continuous replacement.")]),t("p",[e._v("6.Add and delete button for node image.")]),t("p",[e._v("7.Support dragging the canvas while holding down the middle mouse button.")])]),t("p",[e._v("Demo:")]),t("blockquote",[t("p",[e._v("1.Provide an application takeover mode to facilitate docking with one's own storage services; Supports setting static resource paths at runtime.")]),t("p",[e._v("2.Refactoring outline: 1. No longer use the text style that comes with the node; 2. Support full screen editing of the outline; 3. The outline supports dragging and moving nodes; 4. The outline supports deleting nodes.")]),t("p",[e._v("3.Fix the issue of interface dark mode not updating in the scenario of importing data.")])]),t("h2",[e._v("0.6.11-fix.1")]),t("p",[e._v("Fix: 1.Fixed the issue of invisible editing when node text is white.")]),t("h2",[e._v("0.6.11")]),t("p",[e._v("New: 1.Optimize the mini map, remove node content within the mini map, and optimize performance.")]),t("p",[e._v("Demo: 1.Add a new topic and add tab differentiation to the topic list. 2.Node image upload supports inputting network image addresses. 3.Node image upload supports inputting network images.")]),t("h2",[e._v("0.6.10")]),t("p",[e._v("Fix: 1.Fix the issue of deleting a node after searching for it and not updating the search results when searching again. 2.Fixed an issue where the button for adjusting image size did not update after node operation. 3.Fix the issue of incorrect internal data deep copy location. 4.Fix the issue of ineffective line wrapping in rich text nodes. 5. Fix the issue of node swapping and loss when switching themes and other scenarios.")]),t("p",[e._v("New: 1.Search supports searching for white space characters and replacing them with white space characters.")]),t("p",[e._v("Demo: 1.Support calling up search through icon buttons. 2.Support for switching to dark mode through icon buttons. 3.Optimize search: The mouse is not in the search area and not focused, solving the problem of not being able to delete input text when the mouse is not in the search area. 4.Adjust the interface UI for adding node icons and add a series of node icons. 5.Add a sticker list. 6.Fixed the issue of missing focus in the input box after entering the search box. 7.Support clicking on the icon within the node to display an icon for quick replacement and deletion of the floating panel.")]),t("h2",[e._v("0.6.9-fix.1")]),t("p",[e._v("Fix: 1.Fix the issue of incorrect replacement after a single search.")]),t("p",[e._v("New: 1.We will no longer directly modify the incoming data object, but will make a deep copy internally.")]),t("h2",[e._v("0.6.9")]),t("p",[e._v("Fix: 1.Fixed an issue where setting styles to summary nodes would cause summary nodes to disappear. 2.Fixed the issue of node content not rendering when creating a root instance again when customizing node content. 3.Fix the issue of losing focus when adding a new node while the node is in editing. 2.Fix the issue of continuously pressing the tab key not being able to continuously create child nodes.")]),t("p",[e._v("New: 1.Replace existing "),t("code",[e._v("&nbsp;")]),e._v(" in SVG when exporting Characters to avoid exporting SVG errors. 2.Support for search and replace.")]),t("p",[e._v("Demo: 1.When switching themes, it is supported to choose whether to overwrite the set basic style.")]),t("h2",[e._v("0.6.8")]),t("p",[e._v("Fix: 1.Change the shortcut key for inserting a summary to Ctrl+G to avoid conflicts with the save shortcut key. 2.Fix the issue of abnormal switching between rich text editing configuration input boxes while nodes are being edited.")]),t("p",[e._v("New: 1.Modify the copy, cut, and paste logic, and support pasting data from the clipboard.")]),t("p",[e._v("Demo: 1.Fix the issue of not saving the outer margin of the basic style setting node. 2.Supports automatic switching to dark mode based on the theme.")]),t("h2",[e._v("0.6.7")]),t("p",[e._v("Fix: 1.Fixed the issue of missing placeholder elements for the expand and collapse button after node collapse and expansion. 2.Fixed the issue of being able to scale images in read-only mode.")]),t("p",[e._v("New: 1.Support locating to a node based on node instance or node uid. 2.Modify the creation method of node uids and export data to add node uids.")]),t("p",[e._v("Remove: 1.Remove the node transition effect.")]),t("p",[e._v("Demo: 1.Add website homepage. 2.Fixed the issue of missing node styles when creating new nodes in the outline. 3.Fixed the issue of missing edited text after pressing Enter or Tab after editing nodes in the outline. 4.Optimize the node positioning of the outline, and the collapsed nodes will automatically expand. 5.The sidebar button supports folding. 6.Optimize small screen adaptation.")]),t("h2",[e._v("0.6.6")]),t("p",[e._v("New: 1.Support exporting to Xmind new version files. 2.Importing the new version of Xmind file supports importing images from nodes. 3.Add a vertical timeline structure.")]),t("p",[e._v("Fix: 1.The TouchEvent plugin no longer sends click events, solving the problem of two windows opening when clicking on a hyperlink on the mobile end. 2.Fix the issue of dragging and moving a node to become a child node of another node, where the parent node of that node points to not being updated. 3.Fixed an issue where the node border style was not updated when dragging a second level node into a third level node. 4.Fix the issue where the mouse will not trigger the button display when moving into the unfolded or retracted button position, except for the structure growing to the right.")]),t("p",[e._v("optimization: 1.The issue of excessive amplitude when optimizing the touchpad to scale the canvas. 2.The newly created node defaults to selecting all for easy deletion of default text.")]),t("h2",[e._v("0.6.5-fix.1")]),t("p",[e._v("Fix: 1.Fix the issue of adjusting the image size incorrectly while zooming.")]),t("h2",[e._v("0.6.5")]),t("p",[e._v("Fix: 1.Fix the issue of xmind file import errors. 2.Fixed a rare issue where line breaks occur when the width of the node text is decimal.")]),t("p",[e._v("New: 1.The packaged library supports obtaining built-in constants, themes, and other data. 2.Supports configuring the zoom behavior corresponding to the direction of the mouse wheel. 3.Node images support dragging and resizing.")]),t("h2",[e._v("0.6.4-fix.1")]),t("p",[e._v("New: 1.When zooming with the mouse wheel, the default zoom is centered around the current position of the mouse, which can be turned off by configuring.")]),t("p",[e._v("Fix: 1.Fixed an issue where the default value of the zoom center point was not updated after changing the canvas size.")]),t("h2",[e._v("0.6.4")]),t("p",[e._v("New: 1.The default is to scale at the center point of the canvas. 2.Optimize the scaling of both fingers on the mobile end, with the center position of the two fingers as the center point for scaling.")]),t("h2",[e._v("0.6.3")]),t("p",[e._v("Fix: 1.Fix the issue where the summary node will respond to inserting node shortcuts.")]),t("p",[e._v("New: 1.Support custom node content.")]),t("h2",[e._v("0.6.2")]),t("p",[e._v("Fix: 1.Fixed the problem that the new node does not change with the theme in rich Text mode.")]),t("h2",[e._v("0.6.1")]),t("p",[e._v("Fix: 1.Fixed the issue of high movement sensitivity when using the touchpad when changing mouse scrolling to moving the canvas behavior.")]),t("h2",[e._v("0.6.0-fix.1")]),t("p",[e._v("Fix: 1.Fixed the issue of destroying mind maps without setting a background style and reporting errors.")]),t("h2",[e._v("0.6.0")]),t("p",[e._v("Breaking change: Adjusted the directory structure of the simple-mind-map source code, Main impact: 1. The introduction path of the plugin needs to be modified. The constant file path needs to be modified.")]),t("p",[e._v("New: 1.Supports one click zoom to fit the canvas function. 2.Press and hold the Ctrl key to activate the multi selection function on demand through configuration. 3.Support setting to left click to select multiple nodes and right click to drag the canvas. 4. Support controlling whether nodes are allowed to be edited. 5.Add a method for destroying mind maps. 6.Added touch event support plugin.")]),t("p",[e._v("Fix: 1.Fix the issue where holding down the Ctrl key to select multiple nodes does not trigger the click event for the node. 2.Fixed the issue of node style loss when clearing a node and then entering text.")]),t("h2",[e._v("0.5.11")]),t("p",[e._v("New: Supports associative text editing.")]),t("p",[e._v("optimization: Optimizing theme configuration updates, changing configurations that do not involve node size does not trigger node recalculation.")]),t("h2",[e._v("0.5.10")]),t("p",[e._v("New: Optimize node reuse logic using LRU caching algorithm.")]),t("h2",[e._v("0.5.10-fix.1")]),t("p",[e._v("Fix: Fix the issue of import errors.")]),t("h2",[e._v("0.5.10-fix.2")]),t("p",[e._v("Fix: Fixed the issue of switching themes and importing data without triggering data changes in rich text mode.")]),t("p",[e._v("New: Add three new themes.")]),t("h2",[e._v("0.5.9")]),t("p",[e._v("Change: Unified export method format, using "),t("code",[e._v("FileReader")]),e._v(" instead of "),t("code",[e._v("URL.createObjectURL")]),e._v(" to convert "),t("code",[e._v("blob")]),e._v(" data.")]),t("h2",[e._v("0.5.8")]),t("p",[e._v("optimization: 1.The position setting is not triggered when the node position does not change. 2.The unfolding and folding status does not change and does not trigger button updates.")]),t("p",[e._v("New: 1.The default setting is to move the mouse over the node to display the expand and collapse buttons. 2.Support the list of icons that can be inserted into extended nodes.")]),t("h2",[e._v("0.5.7")]),t("p",[e._v("Breaking change：In rich text mode, exporting png has been changed to using html2canvas to convert the entire svg, greatly improving the export speed. However, html2canvas has a bug where the text color inline with the dom node in the foreignObject element cannot be recognized. Therefore, the text color of the exported node is fixed. However, compared to the previously unavailable state of the export, it can at least be exported quickly and smoothly.")]),t("p",[e._v("optimization: Optimize the rich text node editing experience.")]),t("p",[e._v("New: In rich text mode, importing data, initializing data, and switching theme scene node styles support following theme changes.")]),t("h2",[e._v("0.5.6")]),t("p",[e._v("Fix: 1.Fix the issue of node position disorder during fast and multiple renderings in a short period of time. 2.Fix the issue of dragging the canvas while the node is being edited, causing the edit box and node to separate.")]),t("p",[e._v("New: 1.Add a maximum history limit.")]),t("h2",[e._v("0.5.5-fix.1")]),t("p",[e._v("Fix: 1.Fix the issue where the edit box is also outside the canvas when editing nodes outside the canvas. 2.After modifying the structure, reset the transformation to prevent the problem of sudden position changes during the first drag after switching the structure during scaling.")]),t("p",[e._v("optimization: 1.When multiple nodes are selected, as long as there is a cross between the node and the selection area, it is considered selected.")]),t("h2",[e._v("0.5.5-fix.2")]),t("p",[e._v("Fix: 1.Fix mini map error.")]),t("h2",[e._v("0.5.5")]),t("p",[e._v("New: 1.Supports configuring the padding when exporting to PNG, SVG, or PDF. 2.Support the configuration of z-index for node text editing boxes and node comment floating layer elements. 3.Support clicking on areas outside the canvas to end node editing status.")]),t("h2",[e._v("0.5.4")]),t("p",[e._v("New: 1.Add new themes. 2.Added timeline and fishbone structure.")]),t("p",[e._v("Fix: 1.Fix the conflict issue between node right-click and canvas right-click. 2.Fix the bug that the line segment is not hidden when dragging nodes such as organizational chart and directory organization chart.")]),t("p",[e._v("optimization: 1.Optimize the layout of organizational chart. 2.Optimize the layout of the directory organization chart.")]),t("h2",[e._v("0.5.4-fix.1")]),t("p",[e._v("optimization: 1.Optimize fishbone layout.")]),t("h2",[e._v("0.5.3")]),t("p",[e._v("Fix: 1.Fixed the issue of setting the text style when multiple nodes were selected in rich text mode, which would change the text of all selected nodes to the text of the last selected node.")]),t("p",[e._v("New: 1.Support setting the position of the initial central node.")]),t("h3",[e._v("0.5.3-fix.1")]),t("p",[e._v("Fix: 1.Fix the issue where setting the position of the initial central node does not take effect.")]),t("h3",[e._v("0.5.3-fix.2")]),t("p",[e._v("Fix: 1.Fix the issue of not displaying images in nodes when exporting as images.")]),t("h2",[e._v("0.5.2")]),t("p",[e._v("Fix: 1.Remove "),t("code",[e._v("uid")]),e._v(" from exported "),t("code",[e._v("JSON")]),e._v(" data; 2.Clear the node cache pool when re rendering.")]),t("h2",[e._v("0.5.1")]),t("p",[e._v("optimization: 1.Only respond to shortcut key events when the mouse is inside the canvas")]),t("p",[e._v("Fix: 1.Fix the issue of incorrect node position during fast operation")]),t("h2",[e._v("0.5.0")]),t("p",[e._v("This version is mainly about code level changes and optimization, with the core goal of improving rendering performance and reducing stuck issues.")]),t("p",[e._v("New: 1.Support custom expansion and collapse node icons and colors;")]),t("p",[e._v("optimization: 1.Optimize rendering logic, set the theme, move forward and backward, and other operations no longer require full rendering;")]),t("pre",[t("code",[e._v(" 2.Optimize node drag logic, and fix the problem of being unable to drag between two nodes;\n\n 3.Collapse all nodes adds logic to return to the center point;\n\n 4.Fix the problem of nodes flying and scrambling caused by triggering rendering multiple times in a short time;\n\n 5.Optimize the experience of node editing;\n")])]),t("p",[e._v("Fix: 1.Fix the issue where the setData method does not trigger history;")]),t("p",[e._v("modify: Starting from version 0.5.0, considering performance issues, the node activation state can only modify shape related styles:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("[\n  "),t("span",{staticClass:"hljs-string"},[e._v("'fillColor'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderColor'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderWidth'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderDasharray'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderRadius'")]),e._v("\n]\n")])]),t("h2",[e._v("0.4.7")]),t("p",[e._v("optimization: 1.During rich text editing, when initially focusing, all are no longer selected by default; 2.When editing rich text, use the node fill color as the background color to avoid being invisible when the node color is white. 3.Node activation state switching no longer triggers history. 4.Triggering history multiple times in a short time will only add the last data. 5.Optimize the addition of historical records. When there is a rollback, delete the historical data after the current pointer when adding a new record again.")]),t("p",[e._v("New: 1.Support for importing and exporting Markdown format files. 2.Support for configuring initial text when inserting nodes. 3.Expand the commands for inserting and deleting nodes to support specifying nodes.")]),t("h2",[e._v("0.4.6")]),t("p",[e._v("New: 1.Associated lines support adjusting control points.")]),t("p",[e._v("optimization: 1.When adding historical data, filter data that has not changed compared to the previous time.")]),t("p",[e._v("Fix: 1.Fixed a conflict between the direction keys and the navigation function of the direction keys during node editing. 2.Fixed the issue of node id loss when dragging a mobile node, which can cause associated lines to be lost.")]),t("h2",[e._v("0.4.5")]),t("p",[e._v("New: 1.Supports associative lines. 2.You can also drag the canvas by holding down the root node. 3. Hold down the ctrl key to adjust multiple selected nodes.")]),t("h2",[e._v("0.4.4")]),t("p",[e._v("New: Support horizontal scrolling in response to the mouse.")]),t("h2",[e._v("0.4.3")]),t("p",[e._v("Fix: No trigger after forward and backward "),t("code",[e._v("data_ Change")]),e._v(" event.")]),t("p",[e._v("New: Support user-defined mouse wheel events; The mouse wheel is adjusted to support zooming and moving the view up and down.")]),t("h2",[e._v("0.4.2")]),t("p",[e._v("New: The "),t("code",[e._v("setText")]),e._v(" method of the Node class adds a second parameter to support setting rich text content.")]),t("h2",[e._v("0.4.1")]),t("p",[e._v("New: 1.Add and throw node mouseenter and mouseleave events; 2.Node rich text supports setting background color; 3.Node rich text supports clear style.")]),t("p",[e._v("Fix: 1.Mac system touchpad scaling is the opposite problem; 2.When the device window.devicePixelRatio is not 1, the size of the rich text node in the exported image will become larger when there are rich text nodes.")]),t("h2",[e._v("0.4.0")]),t("p",[e._v("New: The node supports rich text editing.")]),t("h2",[e._v("0.3.4")]),t("p",[e._v("New: Automatic line wrapping function is added to node text.")]),t("p",[e._v("Fix: 1.Fix the problem of deletion exceptions if there are root nodes in the batch deleted nodes. 2.Fix the problem that high node height will overlap with other nodes in the case of bottom edge style.")]),t("h2",[e._v("0.3.3")]),t("p",[e._v("Fix: The root node text cannot wrap.")]),t("h2",[e._v("0.3.2")]),t("p",[e._v("Fix: 1.Fix the problem that the node style is not updated when the secondary node is dragged to other nodes or other nodes are dragged to the secondary node; 2.Fix the problem that when the actual content of the mind map is larger than the screen width and height, the excess part is not watermarked when exporting.")]),t("h2",[e._v("0.3.1")]),t("p",[e._v("Fix: 1.The problem that deleting the background image does not take effect; 2.The problem that the connector runs above the root node when the node is dragged to the root node.")]),t("p",[e._v("New: Add position and size settings for background image display. This setting is also supported for exported pictures.")]),t("h2",[e._v("0.3.0")]),t("p",[e._v("Upgrade to plugin architecture, pull out some non-core functions as plugins, register as needed, and reduce the overall volume.")]),t("h2",[e._v("0.2.24")]),t("p",[e._v("New: Node free drag is changed to configurable, the default is "),t("code",[e._v("false")]),e._v(", not open; Support add watermark.")]),t("h2",[e._v("0.2.23")]),t("p",[e._v("New: Support register new theme.")]),t("h2",[e._v("0.2.22")]),t("p",[e._v("optimization：The theme and structure pictures of the built-in "),t("code",[e._v("simple-mind-map")]),e._v(" package are removed and replaced by user self-maintenance. The original pictures can be found in the "),t("code",[e._v("web/assets/img/")]),e._v(" directory.")]),t("h2",[e._v("0.2.21")]),t("p",[e._v("New: Support node horizontal line style.")]),t("h2",[e._v("0.2.20")]),t("p",[e._v("fix：When the distance from the canvas to the upper left corner of the window is not 0, the node dragging will have an offset problem.")]),t("h2",[e._v("0.2.19")]),t("p",[e._v("fix：When the node is not activated, pressing any key will trigger the problem of automatic focus.")]),t("h2",[e._v("0.2.18")]),t("p",[e._v("optimization：Keyboard navigation algorithm for finding focus, supporting simple algorithm, region algorithm and shadow algorithm.")]),t("h2",[e._v("0.2.17")]),t("p",[e._v("New：Keyboard navigation, that is, switch the active nodes through the direction keys; The node text content can be edited directly in the outline.")]),t("h2",[e._v("0.2.16")]),t("p",[e._v("optimization：Mini map; drag performance.")]),t("h2",[e._v("0.2.15")]),t("p",[e._v("optimization：Local file editing.")]),t("p",[e._v("New：Double-click the image in the node to preview the large image.")]),t("h2",[e._v("0.2.14")]),t("p",[e._v("optimization：Automatically expand when inserting child nodes.")]),t("p",[e._v("fix：The error occurred when the mini map was closed.")]),t("h2",[e._v("0.2.13")]),t("p",[e._v("fix：The child node is missing when collapsing state replication.")]),t("h2",[e._v("0.2.11")]),t("p",[e._v("fix：Fix the problem that is lost when the child node collapses state replication.")]),t("p",[e._v("New：Support mini map.")]),t("h2",[e._v("0.2.10")]),t("p",[e._v("optimization：Focus immediately when you manually create a node.")]),t("p",[e._v("fix：Connection style depth update problem.")]),t("p",[e._v("New：Logical structure diagram and mind map add linear connection style and direct connection style.")]),t("h2",[e._v("0.2.9")]),t("p",[e._v("New：Support the creation, opening and saving of local files on the computer.")]),t("h2",[e._v("0.2.8")]),t("p",[e._v("fix：Xmind8 version file import failed.")]),t("p",[e._v("New：Expanding to the specified level is supported.")]),t("h2",[e._v("0.2.7")]),t("p",[e._v("fix：The root node adds multiple nodes to burst the stack.")]),t("p",[e._v("New：Support import .xmind file.")]),t("h2",[e._v("0.2.6")]),t("p",[e._v("New：The title tag is added when exporting svg.")]),t("h2",[e._v("0.2.5")]),t("p",[e._v("fix：Bugs caused by node expansion and collapse.")]),t("p",[e._v("New：Node supports custom line styles.")]),t("h2",[e._v("0.2.4")]),t("p",[e._v("New：Nodes support multiple shapes.")]),t("h2",[e._v("0.2.3")]),t("p",[e._v("fix：Shortcut key conflicts when editing node text; Right-click menu shortcut prompt error; Right-click menu shortcut prompt.")]),t("h2",[e._v("0.2.2")]),t("p",[e._v("fix：The input string '/' conflicts with the shortcut key '/'.")]),t("h2",[e._v("0.2.1")]),t("p",[e._v("New：Support export as pdf.")]),t("h2",[e._v("0.2.0")]),t("p",[e._v("New：Classic4 theme；Support adding summary; Support free drag; Move Node Up, Move Node Down, Copy Node, Cut Node, Paste Node, One-click Organize Cloth Shortcut; Library packaging; Ctrl+left click to select multiple.")]),t("h2",[e._v("0.1.18")]),t("p",[e._v("fix：The problem that the node icon cannot be deleted; The tool button is grayed out and can still be clicked.")]),t("h2",[e._v("0.1.17")]),t("p",[e._v("New：Add read-only mode.")]),t("h2",[e._v("0.1.16")]),t("p",[e._v("New：Node notes support markdown and rich text.")]),t("p",[e._v("fix：Can't select text; Node annotations cannot hide problems after node activation; When editing text such as hyperlinks, notes, labels, etc., the return key and return key conflict with the shortcut key of mind map.")]),t("h2",[e._v("0.1.15")]),t("p",[e._v("New：The status data supports saving the active status and view status (drag position, zoom value)；Support node drag.")]),t("h2",[e._v("0.1.14")]),t("p",[e._v("fix：There are problems with setting topics when activating nodes.")]),t("h2",[e._v("0.1.13")]),t("p",[e._v("New：Shortcut key function; Support export as json。")]),t("p",[e._v("optimization：Some details.")]),t("h2",[e._v("0.1.12")]),t("p",[e._v("New：Local storage；Right-click menu function, etc.")]),t("h2",[e._v("0.1.0")]),t("p",[e._v("Complete basic functions.")])])}],s={},a=s,r=i("2877"),d=Object(r["a"])(a,o,n,!1,null,null,null);t["default"]=d.exports}}]);
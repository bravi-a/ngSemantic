import { SemanticMenu } from "./ng-semantic/menu/menu";
import { SemanticMessage } from "./ng-semantic/message/message";
import { SMTooltipDirective } from "./ng-semantic/popup/tooltip";
import { SemanticPopup, SMPopupDirective } from "./ng-semantic/popup/popup";
import { SemanticModal, SMModalDirective } from "./ng-semantic/modal/modal";
import { SemanticDropdown, SMDropdownDirective } from "./ng-semantic/dropdown/dropdown";
import { SemanticAccordion, SMAccordionDirective } from "./ng-semantic/accordion/accordion";
import { SemanticSegment } from "./ng-semantic/segment/segment";
import { SemanticList } from "./ng-semantic/list/list";
import { SemanticButton } from "./ng-semantic/button/button";
import { SemanticItem } from "./ng-semantic/item/item";
import { SemanticLoader } from "./ng-semantic/loader/loader";
import { SemanticCard } from "./ng-semantic/card/card";
import { SemanticInput, SemanticForm, SemanticTextarea, SemanticCheckbox } from "./ng-semantic/input/input";
import { SemanticSidebar, SMSidebarDirective } from "./ng-semantic/sidebar/sidebar";
import { SemanticTabs, SemanticTab } from "./ng-semantic/tab/tab";

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticCard,
	SemanticInput,
	SemanticTextarea,
	SemanticCheckbox,
	SemanticForm,
	SemanticMenu,
	SemanticMessage,
	SemanticSegment,
	SemanticPopup,
	SemanticList,
	SemanticItem,
	SemanticSidebar,
	SemanticAccordion,
	SemanticModal,
	SemanticDropdown,
	SemanticTabs,
	SemanticTab,
	SemanticButton,
	SemanticLoader
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective,
	SMPopupDirective,
	SMAccordionDirective,
	SMModalDirective,
	SMDropdownDirective,
	SMSidebarDirective
];

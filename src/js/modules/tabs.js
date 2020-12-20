import $ from "jquery";

export default function newTab(selectorTabBtn, classActiveTabBtn, selectorContent, classActiveContent) {
	$(selectorTabBtn).on('click', function (e) {
		e.preventDefault();

		$(selectorTabBtn).removeClass(classActiveTabBtn);
		$(selectorContent).removeClass(classActiveContent);

		$(this).addClass(classActiveTabBtn);
		$($(this).attr('href')).addClass(classActiveContent);
	});
}
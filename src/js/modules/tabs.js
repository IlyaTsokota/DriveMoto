import $ from "jquery";

export default function newTab(selectorTabBtn, classActiveTabBtn, classActiveContent) {
	$(selectorTabBtn).on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass(classActiveTabBtn);
		$($(this).parent().siblings().find('div')).removeClass(classActiveContent);

		$(this).addClass(classActiveTabBtn);
		$($(this).attr('href')).addClass(classActiveContent);
	});
}
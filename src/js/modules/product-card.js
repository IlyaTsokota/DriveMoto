import $ from "jquery";

export default function productCardInit() {
	$('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active');
	});
}
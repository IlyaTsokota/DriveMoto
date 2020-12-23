import $ from "jquery";
import 'slick-carousel';

export default function sliders() {

	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: `<button class="banner-section__slider-btn banner-section__slider-btnprev ">
			<img src="icons/arrow-left.svg" alt="arrow left">
		</button>`,
		nextArrow: `<button class="banner-section__slider-btn banner-section__slider-btnnext ">
			<img src="icons/arrow-right.svg" alt="arrow left">
		</button>`
	});

	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: `<button class="product-slider__slider-btn product-slider__slider-btnprev ">
		<img src="icons/arrow-black-left.svg" alt="arrow left">
	</button>`,
		nextArrow: `<button class="product-slider__slider-btn product-slider__slider-btnnext ">
		<img src="icons/arrow-black-right.svg" alt="arrow left">
	</button>`
	});
}
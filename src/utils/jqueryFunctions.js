import $ from "jquery";

export function setSwatch_1() {
  const tier_value = 0.05;
  $(".MintContainer").attr("selected_tier", 1);
  $(".TierSelector2").removeClass("active");
  $(".TierSelector3").removeClass("active");
  $(".TierSelector4").removeClass("active");
  $(".TierSelector5").removeClass("active");
  $(".TierSelector1").addClass("active");
  $(".DonatePrice").text(tier_value);
  $(".Swatch1").show();
  $(".Swatch2").hide();
  $(".Swatch3").hide();
  $(".Swatch4").hide();
  $(".Swatch5").hide();
}
export function setSwatch_2() {
  const tier_value = 0.1;
  $(".MintContainer").attr("selected_tier", 2);
  $(".TierSelector1").removeClass("active");
  $(".TierSelector3").removeClass("active");
  $(".TierSelector4").removeClass("active");
  $(".TierSelector5").removeClass("active");
  $(".TierSelector2").addClass("active");
  $(".DonatePrice").text(tier_value);
  $(".Swatch1").hide();
  $(".Swatch3").hide();
  $(".Swatch4").hide();
  $(".Swatch5").hide();
  $(".Swatch2").show();
}
export function setSwatch_3() {
  const tier_value = 0.5;
  $(".MintContainer").attr("selected_tier", 3);
  $(".TierSelector1").removeClass("active");
  $(".TierSelector2").removeClass("active");
  $(".TierSelector4").removeClass("active");
  $(".TierSelector5").removeClass("active");
  $(".TierSelector3").addClass("active");
  $(".DonatePrice").text(tier_value);
  $(".Swatch1").hide();
  $(".Swatch2").hide();
  $(".Swatch4").hide();
  $(".Swatch5").hide();
  $(".Swatch3").show();
}
export function setSwatch_4() {
  const tier_value = 1;
  $(".MintContainer").attr("selected_tier", 4);
  $(".TierSelector1").removeClass("active");
  $(".TierSelector2").removeClass("active");
  $(".TierSelector3").removeClass("active");
  $(".TierSelector5").removeClass("active");
  $(".TierSelector4").addClass("active");
  $(".DonatePrice").text(tier_value);
  $(".Swatch1").hide();
  $(".Swatch2").hide();
  $(".Swatch3").hide();
  $(".Swatch5").hide();
  $(".Swatch4").show();
}
export function setSwatch_5() {
  const tier_value = 5;
  $(".MintContainer").attr("selected_tier", 5);
  $(".TierSelector1").removeClass("active");
  $(".TierSelector3").removeClass("active");
  $(".TierSelector4").removeClass("active");
  $(".TierSelector2").removeClass("active");
  $(".TierSelector5").addClass("active");
  $(".DonatePrice").text(tier_value);
  $(".Swatch1").hide();
  $(".Swatch2").hide();
  $(".Swatch3").hide();
  $(".Swatch4").hide();
  $(".Swatch5").show();
}

import { FlightplanETAs } from "./FlightplanETAs";
import { LocalMarketAds } from './LocalMarketAds';
import { ModuleRunner } from "./ModuleRunner";
import { OrderETAs } from "./OrderETAs";
import { OrderInventory } from "./OrderInventory";
import { ParseETAs } from "./ParseETAs";
import { ShippingAds } from "./ShippingAds";
import { SnipLongUsernamesInChat } from "./SnipLongUsernamesInChat";

const localMarketAds = new LocalMarketAds();
const parseETAs = new ParseETAs();
const orderETAs = new OrderETAs();
const flightplanETAs = new FlightplanETAs();
const snipLongUsernamesInChat = new SnipLongUsernamesInChat();
const shippingAds = new ShippingAds();
const orderInventory = new OrderInventory();

const runner = new ModuleRunner([
  localMarketAds, shippingAds, parseETAs,
  orderETAs, flightplanETAs, snipLongUsernamesInChat,
  orderInventory
]);
(function () {
  runner.loop()
})();

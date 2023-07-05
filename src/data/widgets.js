const TestnetDomains = {
  "test.near.social": true,
  "127.0.0.1": true,
  "localhost": true
};

export const NetworkId =
  window.location.hostname in TestnetDomains ? "testnet" : "mainnet";
const TestnetWidgets = {
  image: "eugenethedream/widget/Image",
  default: "efiz.testnet/widget/every.app.homepage",
  viewSource: "eugenethedream/widget/WidgetSource",
  widgetMetadataEditor: "eugenethedream/widget/WidgetMetadataEditor",
  widgetMetadata: "eugenethedream/widget/WidgetMetadata",
  profileImage: "eugenethedream/widget/ProfileImage",
  profilePage: "eugenethedream/widget/Profile",
  profileName: "eugenethedream/widget/ProfileName",
  notificationButton: "eugenethedream/widget/NotificationButton",
};

const MainnetWidgets = {
  image: "mob.near/widget/Image",
  default: "efiz.near/widget/every.app.homepage",
  thing: "every.near/widget/every.thing.view",
  create: "efiz.near/widget/creator",
  header: {
    mobile: "efiz.near/widget/every.app.header.mobile"
  },
  viewSource: "mob.near/widget/WidgetSource",
  widgetMetadataEditor: "mob.near/widget/WidgetMetadataEditor",
  widgetMetadata: "mob.near/widget/WidgetMetadata",
  profileImage: "mob.near/widget/ProfileImage",
  notificationButton: "mob.near/widget/NotificationButton",
  createButton: "mob.near/widget/NotificationButton",
  profilePage: "mob.near/widget/ProfilePage",
  profileName: "patrick.near/widget/ProfileName",
  editorComponentSearch: "mob.near/widget/Editor.ComponentSearch",
  profileInlineBlock: "mob.near/widget/Profile.InlineBlock",
  viewHistory: "bozon.near/widget/WidgetHistory",
};

export const Widgets =
  NetworkId === "testnet" ? TestnetWidgets : MainnetWidgets;

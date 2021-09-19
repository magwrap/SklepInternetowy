export const goToCart = (navigation: any) => {
  navigation.navigate('CartStack', {screen: 'Cart', initial: false});
};

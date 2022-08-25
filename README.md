# react-hook-form useWatch TS typings issue demo

This repo is a demonstration of an issue with the TS typings of react-hook-form's `useWatch()` method.

The method works as expected but the typings appear to be incorrect when not using any parameters.

To demonstrate, clone this repo and run `npm install`, then one of the following:

- `npm run build` will demonstrate that TS emits errors because the typings for `useWatch()` do not 
  work correctly when no arguments are passed.
- `npm start` will demonstrate that `useWatch()` works as expected (`valueA` and `valueB` are both 
  observed and updated appropriately). `parcel` is used to compile, which does not do any TS type 
  checking.
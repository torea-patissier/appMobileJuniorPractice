import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Stack from './StackNavigation';

const RouteConfigs = {

    Accueil:
    {
        screen : Stack
    }
}

const MyDrawer = createDrawerNavigator(RouteConfigs);
export default createAppContainer(MyDrawer);
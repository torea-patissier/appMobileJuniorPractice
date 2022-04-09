import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import BottomTabNav from './BottomTabNav';
const RouteConfigs = {

    Accueil:
    {
        screen : BottomTabNav,
    }
}

const MyDrawer = createDrawerNavigator(RouteConfigs);
export default createAppContainer(MyDrawer);

/**
 * Ordre de la navigation de haut en bas dans l'ordre de la pile
 * App.js
 * Drawer
 * TabNav
 * StackNav
*/
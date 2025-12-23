/*
 * Copyright 2025 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { registerAppTheme } from '@kinvolk/headlamp-plugin/lib';

// Cassette Futurism Theme - inspired by retro-futuristic aesthetics
// Beige/tan tones, warm oranges, and muted greens with a vintage tech feel
registerAppTheme({
  name: 'cassette-futurism',
  base: 'dark',
  primary: '#d4a574', // Warm beige/tan
  secondary: '#ff6b35', // Retro orange
  text: {
    primary: '#e8dcc4', // Cream text
  },
  background: {
    muted: '#2b2520', // Dark brown background
  },
  sidebar: {
    background: '#3a3126', // Warm dark brown
    color: '#d4a574',
    selectedBackground: '#ff6b35', // Orange highlight
    selectedColor: '#1a1612',
    actionBackground: '#5a4a3a',
  },
  navbar: {
    background: '#3a3126',
    color: '#e8dcc4',
  },
  buttonTextTransform: 'uppercase',
  radius: 2,
});

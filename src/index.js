import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import Application from './Application.js';

createRoot(document.querySelector('.root')).render(<Application />);
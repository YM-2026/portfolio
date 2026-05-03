/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { GrainOverlay } from './components/GrainOverlay';
import { Home } from './pages/Home';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GrainOverlay />
      <Navbar />
      <Home />
    </div>
  );
}

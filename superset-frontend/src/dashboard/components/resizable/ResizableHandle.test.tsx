/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { render } from 'spec/helpers/testing-library';

import ResizableHandle from 'src/dashboard/components/resizable/ResizableHandle';

/* eslint-disable react/jsx-pascal-case */
describe('ResizableHandle', () => {
  it('should render a right resize handle', () => {
    const rendered = render(<ResizableHandle.right />);
    expect(
      rendered.container.querySelector('.resize-handle.resize-handle--right'),
    ).toBeVisible();
  });

  it('should render a bottom resize handle', () => {
    const rendered = render(<ResizableHandle.bottom />);
    expect(
      rendered.container.querySelector('.resize-handle.resize-handle--bottom'),
    ).toBeVisible();
  });

  it('should render a bottomRight resize handle', () => {
    const rendered = render(<ResizableHandle.bottomRight />);
    expect(
      rendered.container.querySelector(
        '.resize-handle.resize-handle--bottom-right',
      ),
    ).toBeVisible();
  });
});
/* eslint-enable react/jsx-pascal-case */

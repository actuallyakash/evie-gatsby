import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="/scripts/navigation.js"
      src="/scripts/navigation.js"
    />,
    <script
      key="/scripts/app.js"
      src="/scripts/app.js"
    />
  ])
}
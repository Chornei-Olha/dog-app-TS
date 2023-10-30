import React from 'react';
import { action } from '@storybook/addon-actions';
import ModalDialog from './index';

export default {
  title: 'ModalDialog',
  component: ModalDialog
};

export const Default = () => (
  <ModalDialog open onClose={action('Close button clicked')} />
);

export const Closed = () => (
  <ModalDialog open={false} onClose={action('Close button clicked')} />
);

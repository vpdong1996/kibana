/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { Moment } from 'moment';
import { getRandomString } from '../../../../test_utils';

interface Watch {
  id: string;
  name: string;
  type: 'json' | 'threshold' | 'monitoring';
  timeField?: string;
  triggerIntervalSize?: number;
  triggerIntervalUnit?: string;
  aggType?: string;
  termSize?: number;
  thresholdComparator?: string;
  timeWindowSize?: number;
  timeWindowUnit?: string;
  threshold?: number[];
  isSystemWatch: boolean;
  watchStatus: {
    state: 'OK' | 'Firing' | 'Error' | 'Config error' | 'Disabled';
    comment?: string;
    lastMetCondition?: Moment;
    lastChecked?: Moment;
    isActive: boolean;
  };
}

export const getWatch = ({
  id = getRandomString(),
  name = getRandomString(),
  type = 'json',
  timeField,
  triggerIntervalSize,
  triggerIntervalUnit,
  aggType,
  termSize,
  thresholdComparator,
  timeWindowSize,
  timeWindowUnit,
  threshold,
  isSystemWatch = false,
  watchStatus = {
    state: 'OK',
    isActive: true,
  },
}: Partial<Watch> = {}): Watch => ({
  id,
  name,
  type,
  timeField,
  triggerIntervalSize,
  triggerIntervalUnit,
  aggType,
  termSize,
  thresholdComparator,
  timeWindowSize,
  timeWindowUnit,
  threshold,
  isSystemWatch,
  watchStatus,
});

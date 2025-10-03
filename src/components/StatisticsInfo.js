import React from 'react';
import InfoCard from './InfoCard';
import words from '../data/words';
import './StatisticsInfo.css';

export default function StatisticsInfo() {

  const toLearn = words.filter((w) => w.status && w.status.toLowerCase() === "to learn").length;
  const inProcess = words.filter((w) => w.status && w.status.toLowerCase() === "in process").length;
  const learned = words.filter((w) => w.status && w.status.toLowerCase() === "learned").length;

  return (
    <div className='stats-row'>
      <InfoCard caption="To learn" number={toLearn} color='hotpink' />
      <InfoCard caption="In process" number={inProcess} color="lightgreen" />
      <InfoCard caption="Learned" number={learned} color="lightblue" />
    </div>
  );
}

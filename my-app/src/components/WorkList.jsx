import * as React from 'react';
import { jobSearchSites } from '../utils/work';

export const WorkList = () => {
  return (
    <div>
      <h2>Job search engines:</h2>
      <ul>
        {jobSearchSites.map(({ name, url, id }) => (
          <li key={`work-list-item-${id}`}>
          <h3>{name}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};






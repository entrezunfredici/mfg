import React from 'react';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import { SonarQubeCard } from '@backstage/plugin-sonarqube';

const SonarQubePage: React.FC = () => {
    const entity = {
        apiVersion: 'backstage.io/v1alpha1', // Ajoutez cette ligne
        kind: 'Component', // Ajoutez cette ligne
        metadata: {
            name: 'my-entity',
            annotations: {
                'sonarqube.io/project-key': 'myTodolist',
            },
        },
        spec: {
            type: 'service',
        },
    };

    return (
        <EntityProvider entity={entity}>
            <div>
                <h1>SonarQube Project Metrics</h1>
                <SonarQubeCard />
            </div>
        </EntityProvider>
    );
};

export default SonarQubePage;

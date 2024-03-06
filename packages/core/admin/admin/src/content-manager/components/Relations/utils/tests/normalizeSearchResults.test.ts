// @ts-nocheck TODO remove after FE relations changes
import { normalizeSearchResults } from '../normalizeSearchResults';

const FIXTURE_RELATIONS = [
  {
    documentId: 'Doc3',
    id: 3,
    name: 'Relation 3',
    publishedAt: '2022-08-24T09:29:11.38',
  },

  {
    documentId: 'Doc2',
    id: 2,
    name: 'Relation 2',
    publishedAt: null,
  },

  {
    documentId: 'Doc1',
    id: 1,
    name: 'Relation 1',
    publishedAt: null,
  },
];

describe('RelationInputDataManager || normalizeSearchResults', () => {
  test('add publicationState attribute to each relation', () => {
    // @ts-expect-error – mainField is required.
    expect(normalizeSearchResults(FIXTURE_RELATIONS, {})).toMatchInlineSnapshot(`
      [
        {
          "documentId": "Doc3",
          "id": 3,
          "mainField": undefined,
          "name": "Relation 3",
          "publicationState": "published",
          "publishedAt": "2022-08-24T09:29:11.38",
        },
        {
          "documentId": "Doc2",
          "id": 2,
          "mainField": undefined,
          "name": "Relation 2",
          "publicationState": "draft",
          "publishedAt": null,
        },
        {
          "documentId": "Doc1",
          "id": 1,
          "mainField": undefined,
          "name": "Relation 1",
          "publicationState": "draft",
          "publishedAt": null,
        },
      ]
    `);
  });

  test('add mainField attribute to each relation', () => {
    expect(
      normalizeSearchResults(FIXTURE_RELATIONS, {
        mainFieldName: 'name',
      })
    ).toMatchInlineSnapshot(`
      [
        {
          "documentId": "Doc3",
          "id": 3,
          "mainField": "Relation 3",
          "name": "Relation 3",
          "publicationState": "published",
          "publishedAt": "2022-08-24T09:29:11.38",
        },
        {
          "documentId": "Doc2",
          "id": 2,
          "mainField": "Relation 2",
          "name": "Relation 2",
          "publicationState": "draft",
          "publishedAt": null,
        },
        {
          "documentId": "Doc1",
          "id": 1,
          "mainField": "Relation 1",
          "name": "Relation 1",
          "publicationState": "draft",
          "publishedAt": null,
        },
      ]
    `);
  });
});

import serializer, { matchers } from 'jest-emotion'
expect.addSnapshotSerializer(serializer)
expect.extend(matchers)

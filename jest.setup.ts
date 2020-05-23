import '@testing-library/jest-dom'
import serializer, { matchers } from 'jest-emotion'
expect.addSnapshotSerializer(serializer)
expect.extend(matchers)

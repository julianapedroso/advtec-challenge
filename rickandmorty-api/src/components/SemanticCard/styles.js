import styled from 'styled-components';
import { Card, Button } from 'semantic-ui-react';

export const SimpleCard = styled(Card)`
  background-color: #000;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCcgdmlld0JveD0nMCAwIDE1MCAxNTAnPgo8ZmlsdGVyIGlkPSdpJyB4PScwJyB5PScwJz4KCTxmZUNvbG9yTWF0cml4IHR5cGU9J21hdHJpeCcgdmFsdWVzPScxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAwIDAnIC8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSduJyB4PScwJyB5PScwJz4KCTxmZVR1cmJ1bGVuY2UgdHlwZT0ndHVyYnVsZW5jZScgYmFzZUZyZXF1ZW5jeT0nLjcnIHJlc3VsdD0nZnV6eicgbnVtT2N0YXZlcz0nMicgc3RpdGNoVGlsZXM9J3N0aXRjaCcvPgoJPGZlQ29tcG9zaXRlIGluPSdTb3VyY2VHcmFwaGljJyBpbjI9J2Z1enonIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMT0nMCcgazI9JzEnIGszPSctNzMnIGs0PScuMDEnIC8+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjMDMwMzFhJy8+CjxyZWN0IHg9Jy0xJScgeT0nLTElJyB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjZmZmZmZmJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzEnLz4KPHJlY3QgeD0nLTElJyB5PSctMSUnIHdpZHRoPScxMDIlJyBoZWlnaHQ9JzEwMiUnIGZpbGw9JyMwMzAzMWEnIGZpbHRlcj0ndXJsKCNpKScgb3BhY2l0eT0nMScvPgo8L3N2Zz4=');
  color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  margin: 2rem 0.4rem;
  border: 2px solid #6d47ad;

  img {
    border-radius: 10px 10px 0 0;
  }

  &:hover {
    box-shadow: 0 0 8px 8px #cddc39;
    transition: 300ms;
  }
`;

export const CardHeader = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const Meta = styled(Card.Meta)`
  color: #1cb5e0;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const CardLabel = styled(Card.Content)`
  color: #fff;
`

export const ContainerButton = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

export const GenderButton = styled(Button)`
  background: #4839dc;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 0.5rem;
  border: none;
  border-radius: 3px;
`;

export const StatusButton = styled(Button)`
  background: #cddc39;
  color: #4839dc;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 0.5rem;
  border: none;
  border-radius: 3px;
`;

export const CardContent = styled(Card.Content)`
  color: #f2903e;
  font-weight: bold;
`

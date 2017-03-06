
const CFFIConstants = [
  { Id:1, AmountWithYearVisible : false,   Principal : 'Lønindtægt',  Interest : 'Udvikling', Instalment:'' },
  { Id:2, AmountWithYearVisible : true,   Principal : 'Formue',  Interest : 'Rente', Instalment:'Opsparing' },
  { Id:3, AmountWithYearVisible : true,   Principal : 'Hovedstol',  Interest : 'Rente', Instalment:'Afdrag' },
];

export function GetCFFIData(id) {
  const pos = CFFIConstants.findIndex(x => x.Id == id);
  return CFFIConstants[pos];
};

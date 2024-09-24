'use client';

import CurrenciesData from '@/public/js/data/CurrenciesData';
import FrListData from '@/public/js/data/FrListData';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image';
import { useState } from 'react';

function getCurrencyData(currencyCode: string) {
  return CurrenciesData.find((currency) => currency.currencyCode === currencyCode)
}

export default function BuyTicketDialog(
  { project, isOpen, onHide }:
    {
      project: {
        title: string,
        code: string,
        logoImg: string,
        rightCTA: {
          btnLabel: string,
          countryFrList?: Array<{ currencyCode: string, frList?: Array<string>, url?: string }>,
          url?: string
        }
      },
      isOpen: boolean, onHide: Function
    }
) {
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState('');
  const [selectedFrCode, setSelectedFrCode] = useState('')
  const [selectedFrUrl, setSelectedFrUrl] = useState('')

  let countryFrList = project.rightCTA.countryFrList || []

  function getFrList() {
    let frList: String[] = []
    if (project.rightCTA.countryFrList) {
      const selectedCountryFr = project.rightCTA.countryFrList.find((countryFr) => countryFr.currencyCode === selectedCurrencyCode)
      const selectedFrList = selectedCountryFr && selectedCountryFr.frList ? selectedCountryFr.frList : []

      return FrListData.filter((fr) => selectedFrList.includes(fr.code))
    }
    return frList
  }

  function handleCurrencySelect(currencyCode: string) {
    setSelectedCurrencyCode(currencyCode)
    setSelectedFrCode('')
  }

  function handleCloseDialog() {
    setSelectedCurrencyCode('')
    setSelectedFrCode('')
    setSelectedFrUrl('')
    onHide()
  }

  function handleSelectFr(fr: any) {
    setSelectedFrCode(fr.code)
    setSelectedFrUrl(fr.url)
  }

  function handleClickContinue() {
    window.open(selectedFrUrl, '_blank')
    handleCloseDialog()
  }

  return (
    <>
      <Dialog open={isOpen} onClose={() => handleCloseDialog()} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,.8)', overflowY: 'scroll' }}
        >
          <DialogPanel className="max-w-xlg space-y-4 border bg-white p-8">
            <DialogTitle className="font-bold flex flex-row justify-center items-center">
              <Image src={project.logoImg} alt={project.title} width={100} height={100}/>
              <h2 className='text-lg'>{project.title}</h2>
            </DialogTitle>
            <Description className="mt-5">Select Cuurency</Description>
            <div className="w-full mt-3 grid grid-cols-3 gap-4 p-3 md:grid-cols-5 md:p-0">
              {
                countryFrList.length > 0 && countryFrList.map((currency) => {
                  const currentCurrency = getCurrencyData(currency.currencyCode)
                  return currentCurrency && (
                    <div className={`w-full flex items-center justify-center mt-5 md:mt-0 leading-[50px] bg-[#F0F0F0] rounded-lg border-2 cursor-pointer ${selectedCurrencyCode === currentCurrency.currencyCode ? 'border-[#070E57]' : ''}`}
                      key={currency.currencyCode}
                      onClick={() => handleCurrencySelect(currency.currencyCode)}
                    >
                      <Image src={currentCurrency.flag} alt={currentCurrency.currencyCode} width={25} height={20} className="me-3" />
                      <h3 className="uppercase font-semibold">{currentCurrency.currencyCode}</h3>
                    </div>
                  )
                })
              }
            </div>

            {
              getFrList().length > 0 && <Description className="mt-5">Select FR</Description>
            }
            <div className="w-80 mt-3 grid grid-cols-2 gap-4 p-3 lg:w-[920px] md:grid-cols-3 lg:grid-cols-4 md:p-0">
              {
                getFrList().length > 0 && getFrList().map((fr: any) => (
                  <div 
                    className={`w-full flex flex-col justify-center border-2 rounded-md  p-3 md:w-[200px] cursor-pointer ${selectedFrCode === fr.code ? 'border-[#070E57]' : '' }`}
                    key={fr.code}
                    onClick={() => handleSelectFr(fr)}
                  >
                    <Image src={fr.logo} alt={fr.name} width={150} height={150} className="m-auto" />
                    <p className='text-center text-xs mt-1'>{fr.name}</p>
                  </div>
                ))
              }
            </div>

            <div className="flex gap-4 mt-5">
              <button className="rounded px-5 py-2 border rounded-lg bg-[#920100] text-white" onClick={() => handleCloseDialog()}>Close</button>
              {
                selectedCurrencyCode && selectedFrCode && <button className="rounded px-5 py-2 border rounded-lg bg-[#070E57] text-white" onClick={() => handleClickContinue()}>Contine</button>
              }
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
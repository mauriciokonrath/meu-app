import React, { useState } from 'react';

const AssistantFeaturesVisual = () => {
  const [activeFeature, setActiveFeature] = useState('answers');
  
  const features = [
    { 
      id: 'answers', 
      icon: '💬', 
      title: 'Responde dúvidas', 
      color: 'bg-indigo-600',
      description: 'Responde consultas sobre procedimentos, normas e sistemas com informações precisas e atualizadas.'
    },
    { 
      id: 'internal', 
      icon: '🔒', 
      title: 'Uso 100% interno', 
      color: 'bg-emerald-600',
      description: 'Projetado exclusivamente para funcionários do cartório, com acesso baseado em perfis e autenticação segura.'
    },
    { 
      id: 'available', 
      icon: '⏱️', 
      title: 'Disponível 24/7', 
      color: 'bg-amber-600',
      description: 'Assistente técnico disponível a qualquer momento, sem períodos de indisponibilidade ou pausas.'
    },
    { 
      id: 'faq', 
      icon: '📋', 
      title: 'Perguntas Frequentes', 
      color: 'bg-rose-600',
      description: 'Acesso rápido a perguntas frequentes organizadas por categorias para consulta imediata.'
    },
    { 
      id: 'export', 
      icon: '📤', 
      title: 'Exportação de Conversas', 
      color: 'bg-purple-600',
      description: 'Exporta interações para documentação, treinamento e auditoria em formatos estruturados.'
    },
    { 
      id: 'customize', 
      icon: '🎛️', 
      title: 'Personalização', 
      color: 'bg-cyan-600',
      description: 'Ajustes de parâmetros do modelo como temperatura e extensão das respostas para diferentes necessidades.'
    },
    { 
      id: 'feedback', 
      icon: '📊', 
      title: 'Sistema de Feedback', 
      color: 'bg-blue-600',
      description: 'Mecanismo de avaliação para melhoria contínua, com análise de utilidade das respostas.'
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-900 mb-8">O que o Assistente Faz?</h1>
      
      <div className="grid grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
        {features.map(feature => (
          <button
            key={feature.id}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              activeFeature === feature.id 
                ? `${feature.color} text-white shadow-lg scale-105` 
                : 'bg-white text-gray-700 shadow-sm hover:shadow hover:scale-105'
            }`}
            onClick={() => setActiveFeature(feature.id)}
          >
            <div className="text-2xl mb-1">{feature.icon}</div>
            <div className="text-xs text-center font-medium">{feature.title}</div>
          </button>
        ))}
      </div>
      
      {activeFeature === 'answers' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-bold text-xl text-indigo-800 mb-4">Respostas Contextualizadas</h3>
              <p className="text-gray-700 mb-4">O assistente fornece respostas precisas baseadas na documentação oficial do cartório, sempre citando a fonte e o contexto.</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                  </div>
                  <p className="text-gray-700">Integração com base de conhecimento interna</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                  </div>
                  <p className="text-gray-700">Busca semântica para encontrar informações relevantes</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                  </div>
                  <p className="text-gray-700">Respostas estruturadas com citações de normas</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                  </div>
                  <p className="text-gray-700">Tempo médio de resposta: 10-15 segundos</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex flex-col h-80 overflow-y-auto">
                  <div className="flex justify-start mb-4">
                    <div className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 max-w-[80%]">
                      <p className="text-sm">Como devo proceder para retificar uma certidão de casamento?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <div className="rounded-lg bg-indigo-100 px-4 py-2 text-gray-700 max-w-[80%]">
                      <p className="text-sm">Para retificar uma certidão de casamento, siga estes passos:</p>
                      <ol className="list-decimal list-inside text-sm mt-2 space-y-1">
                        <li>Solicite o formulário de retificação na secretaria do cartório</li>
                        <li>Preencha o formulário indicando claramente o erro a ser corrigido</li>
                        <li>Anexe documentos comprobatórios que justifiquem a retificação</li>
                        <li>Recolha as taxas conforme tabela de emolumentos vigente</li>
                        <li>Aguarde a análise e aprovação pelo oficial registrador</li>
                      </ol>
                      <p className="text-xs text-gray-500 mt-2">Fonte: Manual de Procedimentos Cartorárias, Seção 3.4.2</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start mb-4">
                    <div className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 max-w-[80%]">
                      <p className="text-sm">Qual o prazo para a retificação ser concluída?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <div className="rounded-lg bg-indigo-100 px-4 py-2 text-gray-700 max-w-[80%]">
                      <p className="text-sm">O prazo para conclusão da retificação de certidão de casamento é de 5 dias úteis após a aprovação do pedido pelo oficial registrador, conforme Provimento nº 63/2017 da Corregedoria Nacional de Justiça.</p>
                      <p className="text-xs text-gray-500 mt-2">Fonte: Provimento CNJ nº 63/2017, Art. 14</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeFeature === 'feedback' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-bold text-xl text-blue-800 mb-4">Sistema de Feedback e Avaliação</h3>
              <p className="text-gray-700 mb-4">Mecanismo para avaliação das respostas pelos usuários, gerando métricas para aprimoramento contínuo do sistema.</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  </div>
                  <p className="text-gray-700">Avaliação binária (útil/não ajudou) após cada resposta</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  </div>
                  <p className="text-gray-700">Campo de comentário para avaliações negativas</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  </div>
                  <p className="text-gray-700">Dashboard com métricas de avaliação</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  </div>
                  <p className="text-gray-700">Melhoria contínua baseada em feedback real</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h4 className="font-medium text-blue-800 mb-3 text-center">Avaliação de Resposta</h4>
                  <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
                    <p className="font-medium text-gray-800">Resposta sobre: Habilitação para casamento</p>
                    <p className="text-gray-600 text-xs">Fornecida em: 15/05/2025 14:32</p>
                  </div>
                  
                  <div className="flex justify-center space-x-4 mb-3">
                    <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded flex items-center">
                      <span className="mr-2">👍</span> Útil
                    </button>
                    <button className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded flex items-center">
                      <span className="mr-2">👎</span> Não ajudou
                    </button>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded border border-red-100">
                    <h5 className="text-sm font-medium text-red-800 mb-2">O que poderia ser melhorado?</h5>
                    <textarea className="w-full p-2 text-sm border border-red-200 rounded" rows="3" placeholder="Seu feedback nos ajuda a melhorar..."></textarea>
                    <div className="mt-2 flex justify-end">
                      <button className="bg-red-600 text-white px-3 py-1 rounded text-xs">Enviar feedback</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-800 mb-3 text-center">Métricas de Feedback</h4>
                  <div className="flex mb-2 items-center">
                    <div className="w-20 text-right pr-2 text-sm">Útil:</div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-3 bg-green-500 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <div className="w-10 text-left pl-2 text-sm">94%</div>
                  </div>
                  <div className="flex mb-2 items-center">
                    <div className="w-20 text-right pr-2 text-sm">Não ajudou:</div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-3 bg-red-500 rounded-full" style={{ width: '6%' }}></div>
                    </div>
                    <div className="w-10 text-left pl-2 text-sm">6%</div>
                  </div>
                  <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-center text-blue-800">
                    <p>O feedback é utilizado para melhorar a base de conhecimento e o treinamento do assistente, garantindo constante evolução.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeFeature === 'faq' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-bold text-xl text-rose-800 mb-4">Perguntas Frequentes Categorizadas</h3>
              <p className="text-gray-700 mb-4">Acesso rápido a perguntas mais comuns, organizadas por categorias para facilitar a busca de informações recorrentes.</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                  </div>
                  <p className="text-gray-700">Categorização intuitiva por temas</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                  </div>
                  <p className="text-gray-700">Acesso com um clique, sem necessidade de digitar</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                  </div>
                  <p className="text-gray-700">Atualizável pelo administrador do sistema</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                  </div>
                  <p className="text-gray-700">Baseado nas consultas mais frequentes dos usuários</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-4 h-full">
                <div className="flex space-x-2 mb-4">
                  <div className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">Certidões</div>
                  <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Casamentos</div>
                  <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Procedimentos</div>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded shadow-sm hover:bg-rose-50 cursor-pointer transition">
                    <p className="font-medium text-rose-700">Como emitir uma certidão de nascimento?</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm hover:bg-rose-50 cursor-pointer transition">
                    <p className="font-medium text-rose-700">Qual o procedimento para segunda via de certidão?</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm hover:bg-rose-50 cursor-pointer transition">
                    <p className="font-medium text-rose-700">Quais documentos são necessários para emitir certidão de óbito?</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm hover:bg-rose-50 cursor-pointer transition">
                    <p className="font-medium text-rose-700">Como corrigir um erro em uma certidão?</p>
                  </div>
                  
                  <div className="mt-4 p-4 bg-rose-50 rounded-lg border border-rose-100">
                    <div className="flex items-start">
                      <div className="text-2xl mr-3">💡</div>
                      <div>
                        <h4 className="font-medium text-rose-800">Benefícios</h4>
                        <p className="text-sm text-gray-700">As perguntas frequentes reduzem o tempo de consulta em 78% e garantem consistência nas respostas, especialmente útil para novos funcionários.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeFeature === 'export' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-bold text-xl text-purple-800 mb-4">Exportação de Conversas</h3>
              <p className="text-gray-700 mb-4">Capacidade de exportar interações para documentação, criação de manuais de treinamento e auditoria de procedimentos.</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Exportação para formato Markdown</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Registro de data e hora das interações</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Ideal para criação de manuais de treinamento</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Histórico de consultas para referência futura</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-purple-50 rounded-lg p-4 h-full">
                <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-purple-800">Conversa Exportada</h4>
                    <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">24/04/2025 14:32</div>
                  </div>
                  <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded font-mono overflow-y-auto h-40">
                    <p className="font-bold">## Conversa com Assistente Cartorário</p>
                    <p>Data: 24/04/2025 14:30</p>
                    <br />
                    <p>## Pergunta:</p>
                    <p>Quais documentos são necessários para realizar a habilitação de casamento?</p>
                    <br />
                    <p>### Resposta:</p>
                    <p>Para realizar a habilitação de casamento, são necessários os seguintes documentos:</p>
                    <p>1. Certidão de nascimento atualizada dos noivos (máximo 90 dias)</p>
                    <p>2. Documento de identidade (RG) dos noivos</p>
                    <p>3. Comprovante de residência atual</p>
                    <p>4. Declaração de estado civil, firmada pelos noivos</p>
                    <p>5. Autorização por escrito (se menor de idade)</p>
                    <p>...</p>
                  </div>
                </div>
                
                <div className="flex space-x-3 justify-center">
                  <div className="flex items-center bg-white px-3 py-2 rounded shadow-sm text-sm">
                    <span className="text-purple-600 mr-2">📋</span>
                    <span>Copiar</span>
                  </div>
                  <div className="flex items-center bg-white px-3 py-2 rounded shadow-sm text-sm">
                    <span className="text-purple-600 mr-2">💾</span>
                    <span>Salvar</span>
                  </div>
                  <div className="flex items-center bg-white px-3 py-2 rounded shadow-sm text-sm">
                    <span className="text-purple-600 mr-2">📤</span>
                    <span>Compartilhar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssistantFeaturesVisual;

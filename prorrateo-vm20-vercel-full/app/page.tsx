'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { facultad: "Derecho", costo: 120 },
  { facultad: "Filosofía", costo: 80 },
  { facultad: "Cs. Sociales", costo: 150 },
  { facultad: "Artes", costo: 200 },
];

export default function ProrrateoDashboard() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Sistema de Prorrateo VM20 – Universidad de Chile</h1>
      <Tabs defaultValue="espacios" className="w-full">
        <TabsList>
          <TabsTrigger value="espacios">Asignación de Espacios</TabsTrigger>
          <TabsTrigger value="consumos">Consumos y Servicios</TabsTrigger>
          <TabsTrigger value="reportes">Reportes</TabsTrigger>
        </TabsList>

        <TabsContent value="espacios">
          <Card>
            <CardContent className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <Label htmlFor="facultad">Facultad</Label>
                <Input id="facultad" placeholder="Ej: Filosofía" />
              </div>
              <div>
                <Label htmlFor="metros">Metros cuadrados asignados</Label>
                <Input id="metros" type="number" placeholder="Ej: 1200" />
              </div>
              <Button className="col-span-2 mt-4">Agregar Asignación</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consumos">
          <Card>
            <CardContent className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <Label htmlFor="servicio">Servicio</Label>
                <Input id="servicio" placeholder="Ej: Electricidad" />
              </div>
              <div>
                <Label htmlFor="costo">Costo Total ($)</Label>
                <Input id="costo" type="number" placeholder="Ej: 1500000" />
              </div>
              <Button className="col-span-2 mt-4">Registrar Servicio</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reportes">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Distribución de Costos por Facultad</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="facultad" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="costo" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}